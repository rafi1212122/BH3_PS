# BH3_PS
### A PS for HI3 sea client
#### Heavily inspired from CrepeSR
__________________________
pls help my skill issue i can't keep myself stay sane
__________________________
### Running the thing
- Do Git Clone / Download as Zip

``` git clone https://github.com/rafi1212122/BH3_PS.git ```

- Copy Environment Variables

``` cp .env.example .env ```

If your mysql credentials is not the default you may change it in .env

- Create New Database In MySQL named BH3 (Can be changed in schema.prisma)

- Migrate Database

``` npx prisma migrate dev ```

If you have any issue with this just run

``` npx prisma db push ```

- Run npm install

``` npm install ```

- Run npm run dev

``` npm run dev ```
