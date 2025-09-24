 const template = document.getElementById("card-template");
  const contenedor = document.getElementById("contenedor");

  const productos = [
    { titulo: "Laptop", desc: "16GB RAM", price: 1505000, image: "https://p2-ofp.static.pub//fes/cms/2024/07/17/109vq5fdalv01w5jsu6vh35ncnk5jn890135.png" },
    { titulo: "Mouse", desc: "Inalámbrico", price: 100000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuZO6UK7LWo-yZr5OHyLJRhq8MMHzg2hG6w&s" },
    { titulo: "RAM", desc: "8GB", price: 55000, image: "https://m.media-amazon.com/images/I/61FsaYbk3UL.jpg" },
    { titulo: "SSD", desc: "128 GB", price: 150000, image: "https://http2.mlstatic.com/D_NQ_NP_985051-MCO48969374694_012022-O.webp" },
    { titulo: "Teclado", desc: "Mecánico", price: 250000, image: "https://www.kalley.com.co/medias/7705946478533-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w0NzMzNnxpbWFnZS93ZWJwfGFEQTVMMmd4TkM4eE5ETTJOakV5T1RVMU16UXpPQzgzTnpBMU9UUTJORGM0TlRNelh6QXdNVjh4TkRBd1YzZ3hOREF3U0F8OTUwOTg1N2IwNjcxZWZiNzBhZTc1ZmZhNTU0M2JlMDRiMGIyN2VkYzFiY2FiYzA4YzMyZWUyMGZjMzU3YTRkMQ" }
];

  productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".desc").textContent = p.desc;
    clon.querySelector("img").src = p.image;
    clon.querySelector("img").title = p.desc;
    clon.querySelector(".price").textContent = p.price.toLocaleString("Es-Co");
    contenedor.appendChild(clon);
  });