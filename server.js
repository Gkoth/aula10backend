// Servidor Express - Projeto #05: Academia & CrossTraining
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3005;

app.get('/api/academia/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 5,
        sistema: "Academia & CrossTraining",
        categoria: "Esporte & Bem-Estar",
        tabela_conectada: process.env.TABELA_ALVO || "fichas_treino",
        parametro_ambiente: process.env.MODALIDADE_PADRAO || "CROSS_TRAINING_PRO",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #05] Academia & CrossTraining rodando em http://localhost:${PORT}/api/academia/status`);
});