
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import HeroSection from "@/components/HomeComponents/HeroSection";
import TrendingCreators from "@/components/HomeComponents/TrendingCreators";
import ExploreCreator from "@/components/HomeComponents/ExploreCreator";
import Categories from "@/components/HomeComponents/Categories";
import StatsSection from "@/components/HomeComponents/StatsSection";
import NewCreator from "@/components/HomeComponents/NewCreator";


export default function Home() {
  return (
    <div className="nightwing-bg">
     <HeroSection/>
     <StatsSection/>
     <ExploreCreator/>
     <Categories/>
     <TrendingCreators/>
     <NewCreator/>
    </div>
  );
}
