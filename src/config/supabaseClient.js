require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ [ERRO CRITICO DE SEGURANÇA]: SUPABASE_URL ou SUPABASE_KEY não encontrados no arquivo .env!');
    console.error('Verifique se o arquivo .env está na raiz do projeto e sem espaços ao redor do sinal de =.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;