const express = require('express');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

// 启用CORS跨域
app.use(cors());

// Swagger配置
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A simple Express API with Swagger documentation',
    },
    servers: [
      {
        url: process.env.NODE_ENV === 'production' 
          ? 'https://api.dooo.fun' 
          : 'http://localhost:3000',
      },
    ],
  },
  apis: ['./api/index.js'], // 指定包含API注释的文件路径
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *   get:
 *     summary: 返回一个欢迎消息
 *     description: 返回一个简单的JSON欢迎消息
 *     responses:
 *       200:
 *         description: 成功
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Hello from Express on Vercel!'
 */
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel!' });
});

// 导出为 Vercel 所需的 handler
module.exports = app;
