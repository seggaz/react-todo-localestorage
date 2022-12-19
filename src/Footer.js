
const Footer = ({ length }) => {
	const today = new Date();
	return (
		<footer className="footer">
			<p>{length} list {length <= 1 ? "item" : "items"}</p>
			<p>Copyright {today.getFullYear()}</p>

		</footer>
	);
};

export default Footer;