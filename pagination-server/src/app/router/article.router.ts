import * as Controller from '../controller/article.controller';
import { Router } from 'express'

const router = Router();

router.route("/")
.get(Controller.getArticles)
.post(Controller.postArticle)
.delete(Controller.deleteArticles);

router.route("/:id")
.get(Controller.getArticle)
.delete(Controller.deleteArticle);

export default router;

