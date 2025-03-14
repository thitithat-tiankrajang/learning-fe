import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Banner/>
      <div className="m-5 flex flex-row flex-wrap content-around justify-around">
       <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg"/>
       <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg"/>
       <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg"/>
      </div>
    </main>
  );
}
