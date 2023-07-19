const raio = 3;

const diametro = raio * 2;

const volume = (4 / 3) * (raio ** 3);

console.log(`O volume de uma esfera cujo raio mede ${raio}, é de ${volume.toFixed(1)} PI.`);

console.log(`O volume de uma esfera cujo raio mede ${raio}, é de ${((4 / 3) * Math.PI * (raio ** 3)).toFixed(2)}.`);