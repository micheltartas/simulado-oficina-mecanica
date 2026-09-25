// ============================================================
// routes/veiculos.js
// ============================================================
// ESTE ARQUIVO É COM VOCÊS (ALUNO DESENVOLVE).
//
// Lembrete: o cadastro de veículo é obrigatoriamente vinculado
// a um cliente (cliente_id não pode ser nulo).
// ============================================================

import express from 'express';
import { criarCliente } from '../config/db.js';
import { verificarSessao } from '../middleware/auth-middleware.js';

const router = express.Router();

// ─────────────────────────────────────────
// POST / -> inserir novo veículo, associado a um cliente
// ─────────────────────────────────────────
router.post('/', verificarSessao, async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        const { placa, modelo, cliente_id } = req.body;

        // TODO: validar que placa e cliente_id foram informados

        // TODO: montar o INSERT

        res.status(201).json({}); // TODO: substituir pelo registro criado
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

export default router;
