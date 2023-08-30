interface StatsProps {
    stats: {
        name: string;
        value: number;
    }[];
}

function Stats({ stats }: StatsProps): JSX.Element {
    return (
        <div className="stats grid gtc-auto2">
            {stats.map((stat, index) => (
                <div className="statAndValue flex-row just-spaB" key={index}>
                    <p className="stat">
                        {!stat.name.includes("special")
                            ? stat.name.toUpperCase()
                            : (
                                  stat.name.substring(0, 2) +
                                  ". " +
                                  stat.name.substring(8, 11) +
                                  "."
                              ).toUpperCase()}
                    </p>
                    <span className="value">{stat.value}</span>
                </div>
            ))}
        </div>
    );
}

export default Stats;
