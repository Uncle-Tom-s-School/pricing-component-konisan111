# Pricing Component feladat

Készítsétek el a design.png képen látható weboldalt! A weboldalhoz a forrásszöveg a public mappa data.json fájljában található, innen kellene a tanult módon fetch-el beimportálni.

Mind a három kártyához ugyan azt a komponenst (PriceCard) használjátok, a kinézetbeli különbségeket a highlighted érték alapján hozzátok létre (ha a highlighted true, akkor más osztályt adjatok a kártyának, mint ha false).

### Szorgalmi feladat

Ha az eddigieket túl egyszerűnek találtátok volna, egészítsétek ki a már korábban tanult ToggleSwitch-el és useContext/propsDrilling-el.
A ToggleSwitch a havi/éves árazás között váltogasson, olyan módon, hogy az éves árazás 11 havi díjnak felel meg (lényegében egy hónap ingyen van). Éves árazásnál jelenjen meg a "/ year" felirat az ár alatt.