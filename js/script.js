function abrirDetalhes(nome, preco, descricao, imgSrc, linkHref) {
    document.getElementById('modalTitulo').innerText = nome;
    document.getElementById('modalPreco').innerText = preco;
    document.getElementById('modalDescricao').innerText = descricao;
    document.getElementById('modalImagem').src = imgSrc;
    document.getElementById('modalImagem').alt = nome;
    document.getElementById('modalLinkDetalhes').href = linkHref;

    const modalElement = document.getElementById('modalProduto');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}

function validarFormulario(event) {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const comentario = document.getElementById('comentario').value.trim();
    const alertaDiv = document.getElementById('alertaMensagem');

    if (nome === '' || email === '' || comentario === '') {
        event.preventDefault();
        alertaDiv.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Atencao!</strong> Por favor, preencha todos os campos obrigatorios (Nome, E-mail e Mensagem).
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
            </div>`;
        alertaDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        event.preventDefault();
        alertaDiv.innerHTML = `
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>E-mail inválido!</strong> Por favor, insira um endereco de e-mail válido.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
            </div>`;
        alertaDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return false;
    }

    alertaDiv.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Obrigado, ${nome}!</strong> Sua mensagem foi enviada. Seu e-mail será aberto para confirmar o envio.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
        </div>`;
}
