import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const newProduct = await prisma.produto.create({
        data: {
            nome: "Arroz",
            valor: 2.50,
            categoria: "Alimento",
            quantidade: 1
        }
    })

    const newUser = await prisma.usuario.create({
        data: {
            matricula: "20201214010016",
            senha: "1234556",
        }
    })

    console.log("Novo produto:", newProduct)
    console.log("Novo usuario:", newUser)

    const allProducts = await prisma.produto.findMany()
    const allUsers = await prisma.usuario.findMany()

    console.log("Todos os produtos: ")
    console.dir(allProducts, { depth: null})

    console.log("Todos os usuarios: ")
    console.dir(allUsers, { depth: null})
}

main().catch((e) => console.error(e))
      .finally(async () => await prisma.$disconnect())