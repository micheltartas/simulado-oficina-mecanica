// ============================================================
// routes/clientes.js
// ============================================================
// ESTE ARQUIVO É COM VOCÊS (ALUNO DESENVOLVE).
//
// A estrutura de cada rota já está pronta. O que falta é a
// lógica específica (marcada com TODO).
//
// Lembretes:
//   - CPF deve ser CRIPTOGRAFADO ao salvar/atualizar e
//     DESCRIPTOGRAFADO ao listar/exibir (utils/crypto-utils.js)
//   - Cada rota já vem protegida pelo middleware verificarSessao
// ============================================================

import express from 'express';
import { criarCliente } from '../config/db.js';
import { criptografarCPF, descriptografarCPF } from '../utils/crypto-utils.js';
import { verificarSessao } from '../middleware/auth-middleware.js';

const router = express.Router();

// ─────────────────────────────────────────
// GET / -> listar clientes
// GET /?busca=termo -> listar clientes filtrados
// ─────────────────────────────────────────
router.get('/', verificarSessao, async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        // TODO: req.query.busca contém o termo digitado (se houver).
        // Monte a query de acordo.

        const resultado = await client.query('SELECT * FROM clientes'); // TODO: ajustar

        // TODO: descriptografar o CPF de cada registro antes de responder

        res.json(resultado.rows);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

// ─────────────────────────────────────────
// POST / -> inserir novo cliente
// ─────────────────────────────────────────
router.post('/', verificarSessao, async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        const { nome, cpf, telefone } = req.body;

        // TODO: validar campos obrigatórios

        // TODO: criptografar o CPF antes de salvar

        // TODO: montar o INSERT

        res.status(201).json({}); // TODO: substituir pelo registro criado
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

// ─────────────────────────────────────────
// PUT /:id -> editar cliente existente
// ─────────────────────────────────────────
router.put('/:id', verificarSessao, async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        const { id } = req.params;
        const { nome, cpf, telefone } = req.body;

        // TODO: criptografar o CPF recebido

        // TODO: montar o UPDATE

        res.json({}); // TODO: substituir pela confirmação/registro atualizado
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

// ─────────────────────────────────────────
// DELETE /:id -> excluir cliente
// ─────────────────────────────────────────
router.delete('/:id', verificarSessao, async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        const { id } = req.params;

        // TODO: montar o DELETE

        res.json({ mensagem: 'Cliente removido com sucesso.' });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

export default router;
