import { Request, Response } from 'express';
import faker from 'faker';
import Article from '../model/article.model';

export async function  getArticles(req: Request, res:Response): Promise<Response>{
    try {
        const articles = await Article.find();
        return res.status(200).json(articles);
    } catch (error) {
        return res.status(500).json({
            message: "Error while getting the articles",
            error: error
        });
    }
}

export async function  getArticle(req: Request, res:Response): Promise<Response>{
    try {
        const articles = await Article.findById(req.params.id);
        return res.status(200).json(articles);
    } catch (error) {
        return res.status(500).json({
            message: "Error while getting the articles",
            error: error
        });
    }
}

export async function  postArticle(req: Request, res:Response): Promise<Response>{
    try {
        let array = [];
        for(let i = 0; i < 100; i++){
            const articles = await Article.create({
                title: faker.name.title(),
                imageURL: faker.image.imageUrl(),
                description: faker.lorem.sentence()
            });
            array.push(articles);
        }
        return res.status(200).json(array);
    } catch (error) {
        return res.status(500).json({
            message: "Error while posting and article",
            error: error
        });
    }
}

export async function  deleteArticles(req: Request, res:Response): Promise<Response>{
    try {
        const articles = await Article.deleteMany({});
        return res.status(200).json(articles);
    } catch (error) {
        return res.status(500).json({
            message: "Error while deleting and articles",
            error: error
        });
    }
}

export async function  deleteArticle(req: Request, res:Response): Promise<Response>{
    try {
        const articles = await Article.findByIdAndDelete(req.params.id);
        return res.status(200).json(articles);
    } catch (error) {
        return res.status(500).json({
            message: "Error while getting the articles",
            error: error
        });
    }
}