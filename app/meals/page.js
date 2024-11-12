import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import classes from './page.module.css'
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
    title: 'All Meals',
    description: 'Browse the delicious meals shared by our vibrant community',
  };

async function Meals() {
    const meals = await getMeals()
    return <MealsGrid meals={meals} />
}
export default function Home() {

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, createed {' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favorite recipe and cook it yourself. It easy and fun</p>
                <p className={classes.cta}>
                    <Link href='/meals/share'>Share your Favorite Recipe</Link>
                </p>
            </header>

            <main>
                <Suspense fallback={<p className={classes.loading}>Fethcing meels...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}