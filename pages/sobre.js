import NextLink from "next/link";

export default function AboutScreen() {
  return (
    <div>
      <h1>Sobre</h1>
      <NextLink href="/">
        <a>Ir para a página incial</a>
      </NextLink>
    </div>
  );
}
