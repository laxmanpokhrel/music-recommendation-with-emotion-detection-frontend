
## Getting started with the starter kit

  

1. Do not use npm to install packages, use yarn. If you want to run `npm install` then delete the `yarn.lock` file and install the packages using npm.

2. Create a .env file and copy .env.sample to .env

3. Run `yarn dev` to start the development server.

4. If there is error on "/dashboard" route then comment out the proxy setup part on `vite.config.ts` file.

  

## Folder Structure

  

- [API](./src/api/readme.md)$~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~$--> Api's for the project

- [Wrappers](./src/api/wrappers/readme.md)$~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~$--> Wrappers

- [Routes](./src/routes/readme.md)$~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~$--> Routes

- [Utils](./src/utils/readme.md)

- [UI](./src/ui/readme.md)

- [Atoms](./src/ui/atoms/readme.md)$~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~$--> Pure HTML components and premitives

- [Molecules](./src/ui/molecules/readme.md)$~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~$--> Group of Atoms

- [Organisms](./src/ui/organisms/readme.md)$~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~$--> Group of Molecules

- [Templates](./src/ui/templates/readme.md)$~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~$--> Group of Organisms

- [Pages](./src/ui/pages/readme.md)$~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~$--> Group of Templates

- [CustomComponents](./src/ui/customComponents/readme.md)$~~~~~~~~~~~~~~~~~~~~~~~$--> Custom Components

  

## Example to add shadcn component (select component- [link](https://ui.shadcn.com/docs/components/select) )

	npx shadcn-ui add select
give path as      
 **./src/ui/atoms/common/**
 
- resolve all classes with tailwind prefix
- replace classes with color variables with project color variables
- add missing dependencies ( if npx failed to install dependencies automatically e.g: @radix-ui/react-select )


## We are using base pixel as 10px, so that it is easier for us to convert pixels to rem. For Example; now 1rem = 10px similarly, 34px = 3.4rem 
