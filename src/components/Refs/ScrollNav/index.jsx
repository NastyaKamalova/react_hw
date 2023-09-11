import React, { useRef } from "react";
import SubHeader from "../../../ui/SubHeader";
import style from "./scrollNav.module.css"
import Article from "./Article";
import NavButton from "./NavButton";

const articles = [
	{
		id: 0,
		head: "Lorem",
		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem illum debitis soluta vero. Totam at iste voluptate sit quaerat cupiditate obcaecati, dicta nam ipsa eveniet rem, suscipit atque placeat ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem illum debitis soluta vero. Totam at iste voluptate sit quaerat cupiditate obcaecati, dicta nam ipsa eveniet rem, suscipit atque placeat ea."
	},
	{
		id: 1,
		head: "Placeat",
		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem illum debitis soluta vero. Totam at iste voluptate sit quaerat cupiditate obcaecati, dicta nam ipsa eveniet rem, suscipit atque placeat ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem illum debitis soluta vero. Totam at iste voluptate sit quaerat cupiditate obcaecati, dicta nam ipsa eveniet rem, suscipit atque placeat ea."
	},
	{
		id: 2,
		head: "Eveniet",
		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem illum debitis soluta vero. Totam at iste voluptate sit quaerat cupiditate obcaecati, dicta nam ipsa eveniet rem, suscipit atque placeat ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem illum debitis soluta vero. Totam at iste voluptate sit quaerat cupiditate obcaecati, dicta nam ipsa eveniet rem, suscipit atque placeat ea."
	},
	{
		id: 3,
		head: "Suscipit",
		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem illum debitis soluta vero. Totam at iste voluptate sit quaerat cupiditate obcaecati, dicta nam ipsa eveniet rem, suscipit atque placeat ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem illum debitis soluta vero. Totam at iste voluptate sit quaerat cupiditate obcaecati, dicta nam ipsa eveniet rem, suscipit atque placeat ea."
	},
	{
		id: 4,
		head: "Obcaecati",
		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem illum debitis soluta vero. Totam at iste voluptate sit quaerat cupiditate obcaecati, dicta nam ipsa eveniet rem, suscipit atque placeat ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem illum debitis soluta vero. Totam at iste voluptate sit quaerat cupiditate obcaecati, dicta nam ipsa eveniet rem, suscipit atque placeat ea."
	},
];


function ScrollNav() {
	const navRef = useRef([]);
	const topRef = useRef(null);

	function handleScrollNav(id) {
    const node = navRef.current.find(node => Number(node.id) === id);
    node.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
    });
  }

	function toNav() {
    topRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
    });
	}

	return (
		<div>
			<SubHeader>Scroll Nav</SubHeader>
			<div ref={topRef} className={style.div}>
				<h2>Navigation:</h2>
				{
					articles.map(article => (
						<NavButton key={article.id} article={article} handleScrollNav={handleScrollNav}/>
					))
				}

			</div>
			<div>
				<h2>Articles:</h2>
				{
					articles.map(article => (
						<Article ref={navRef} key={article.id} article={article} toNav={toNav} />
					))
				}
			</div>
		</div>
	);
}
  
  export default ScrollNav;
  