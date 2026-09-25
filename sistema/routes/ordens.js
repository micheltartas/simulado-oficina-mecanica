// ============================================================
// routes/ordens.js
// ============================================================
// ESTE ARQUIVO É COM VOCÊS (ALUNO DESENVOLVE).
//
// Lembrete sobre o JOIN: o cliente não está diretamente ligado à
// ordem de serviço - o caminho é ordens_servico -> veiculos ->
// clientes. Veja exemplos/exemplo-join-multiplas-tabelas.sql.
// ============================================================

import express from 'express';
import { criarCliente } from '../config/db.js';
import { verificarSessao } from '../middleware/auth-middleware.js';

const router = express.Router();

// ─────────────────────────────────────────
// GET / -> listar ordens de serviço ordenadas por data de
// abertura, com dados do veículo e do cliente
// ─────────────────────────────────────────
router.get('/', verificarSessao, async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        // TODO: montar a query com JOIN (ordens_servico -> veiculos
        // -> clientes) e ORDER BY pela data de abertura

        const resultado = await client.query('SELECT * FROM ordens_servico'); // TODO: ajustar

        res.json(resultado.rows);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

// ─────────────────────────────────────────
// PUT /:id -> atualizar a data de abertura de uma ordem
// ─────────────────────────────────────────
router.put('/:id', verificarSessao, async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        const { id } = req.params;
        const { data_abertura } = req.body;

        // TODO: montar o UPDATE, filtrando por WHERE id = $...

        res.json({}); // TODO: substituir pela confirmação/registro atualizado
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

export default router;
