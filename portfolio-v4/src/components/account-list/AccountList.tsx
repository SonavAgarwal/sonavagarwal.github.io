import { useEffect, useState } from "react";
import { AccountInfo } from "../../data/types";
import Account from "../account/Account";
import styles from "./AccountList.module.css";

interface Props {
	accounts: AccountInfo[];
	initialCount: number;
	randomize?: boolean;
}

const AccountList = ({ accounts, initialCount, randomize = false }: Props) => {
	const [renderedAccounts, setRenderedAccounts] = useState<AccountInfo[]>([]);
	const [renderedAccountCount, setRenderedAccountCount] =
		useState<number>(initialCount);

	useEffect(() => {
		let newRenderedAccounts: AccountInfo[] = [...accounts];
		if (randomize)
			newRenderedAccounts = newRenderedAccounts.sort(() => Math.random() - 0.5);
		setRenderedAccounts(newRenderedAccounts);
	}, []);

	return (
		<div className={styles.container}>
			{renderedAccounts.slice(0, renderedAccountCount).map((data) => (
				<Account {...data} key={data.title} />
			))}
			{renderedAccountCount < accounts.length && (
				<button
					name="seeMore"
					className={styles.button}
					onClick={() => setRenderedAccountCount(renderedAccountCount + 5)}
				>
					See more
				</button>
			)}
		</div>
	);
};

export default AccountList;
