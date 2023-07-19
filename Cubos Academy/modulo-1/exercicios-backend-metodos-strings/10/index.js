const nomeArquivo = 'Foto da Familia.gif';

function archiveValidator (archive) {
    let validArchive = false;
    let extension = archive.slice(archive.indexOf('.')+1);
    if (extension === 'png' || extension === 'jpg' || extension === 'jpeg' || extension === 'gif') {
        validArchive = true;
    }
    console.log(validArchive ? 'Arquivo válido' : 'Arquivo inválido');
}

archiveValidator(nomeArquivo);