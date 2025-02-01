import FAQ from '../models/faqModel.js';
import asyncHandler from '../utils/asyncHandler.js';
import translateService from '../services/translateService.js';
import redisClient from '../config/redis.js';

export const getFAQs = asyncHandler(async (req, res) => {
  const lang = req.query.lang || 'en';
  const cacheKey = `faqs_${lang}`;

  const cachedData = await redisClient.get(cacheKey);
  if (cachedData) return res.json(JSON.parse(cachedData));

  const faqs = await FAQ.find();
  const translatedFaqs = faqs.map(faq => ({
    question: faq.translations[lang] || faq.question,
    answer: faq.answer,
  }));

  await redisClient.set(cacheKey, JSON.stringify(translatedFaqs), 'EX', 3600);
  res.json(translatedFaqs);
});

export const createFAQ = asyncHandler(async (req, res) => {
  const { question, answer } = req.body;
  const translations = await translateService.translateText(question);
  const faq = await FAQ.create({ question, answer, translations });

  // Invalidate cache after creating a new FAQ
  const cacheKeys = await redisClient.keys('faqs_*');
  await Promise.all(cacheKeys.map(key => redisClient.del(key)));

  res.status(201).json(faq);
});
