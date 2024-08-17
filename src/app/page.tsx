import Header from "@/components/layouts/header/header";
import Wrapper from "@/components/layouts/wrapper/wrapper";
import MainContents from "@/components/top/mainContents/mainContents";
// import styles from "./top.module.scss";

export default function Home() {
  return (
    <main>
      <Header />
      <Wrapper>
        <MainContents />
      </Wrapper>
    </main>
  );
}
