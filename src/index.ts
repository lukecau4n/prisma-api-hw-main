import { PrismaClient } from "@prisma/client";
import express from 'express';

const prisma = new PrismaClient()

const app = express()

app.use(express.json())


// Todos os produtos

app.get('/produtos', async (req,res) => {
    const products = await prisma.produto.findMany()
    res.json({
        sucess: true,
        payload: products,
    })
})


// CREATE Product

app.post(`/produto`, async (req, res) =>  {
    const result = await prisma.produto.create({
        data: {...req.body},
    })
    res.json({
        success: true,
        payload: result,
    })
})

// READ Product

app.get(`/produto/:id`, async (req, res) => {
    const { id } = req.params
    const result = await prisma.produto.findFirst({
        where: { id: Number(id) },
    })

    res.json({
        success: true,
        payload: result,
    })
})

// DELETE Product

app.delete(`/produto/:id`, async (req, res) => {
    const { id } = req.params
    const result = await prisma.produto.delete({
        where: { id: Number(id) },
    })

    res.json({
        success: true,
        payload: result
    })
})

// UPDATE Product

app.put(`/produto/:id`, async(req, res) => {
    const { id } = req.params
    const result = await prisma.produto.update({
        where: { id: Number(id) },
        data: {...req.body},
    })
    res.json({
        success: true,
        payload: result,
    })
})

// Todos os Usuários

app.get('/usuarios', async (req, res) => {
    const users = await prisma.usuario.findMany()
    res.json({
        success: true,
        payload: users
    })
})

// CREATE Usuário

app.post(`/usuario`, async (req, res) => {
    const result = await prisma.usuario.create({
        data: { ...req.body },
    })
    res.json({
        success: true,
        payload: result
    })
})

// READ Usuário

app.get(`/usuario/:id`, async (req, res) => {
    const { id } = req.params
    const result = await prisma.usuario.findFirst({
        where: { id: Number(id) }
    })
    res.json({
        success: true,
        payload: result
    })
})

// UPDATE Usuário

app.put(`/usuario/:id`, async(req,res) => {
    const { id } = req.params
    const result = await prisma.usuario.update({
        where: { id: Number(id) },
        data: {...req.body}
    })
    res.json({
        success: true,
        payload: result
    })
})

// DELETE Usuário

app.delete(`/usuario/:id`, async (req,res) => {
    const { id } = req.params
    const result = await prisma.usuario.delete({
        where: { id: Number(id)}
    })

    res.json({
        success: true,
        payload: result
    })
})


app.use((req, res, next) => {
    res.status(404);
    return res.json({
        sucess: false,
        payload: null,
        message: `Endpoint não encontrado para o caminho: ${req.path}`,
    })
})

app.listen(3000, () => 
    console.log(`REST API pronto em: http://localhost:3000`))