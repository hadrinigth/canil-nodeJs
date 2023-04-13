import { Request, Response } from 'express'; // importando express

import { createMenuObject } from '../helpers/createMenuObeject'; // importando funcão para menu
import { Pet } from '../models/pets';
export const home = (req: Request, res: Response) =>{ //controller base de home
    let list = Pet.getAll();

    res.render('pages/home', { // funcão para renderizar a pagina

        menu: createMenuObject('all'), // uso da funcão importada (repete varias vezes)
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
});
};
export const dogs = (req: Request, res: Response) =>{
    let list = Pet.getFromType('dog')

    res.render('pages/home', {
        menu: createMenuObject('dog'), 
        banner: {
            title: 'Cachoros',
            background: 'banner_dog.jpg'
        },
        list
    });
};
export const cats = (req: Request, res: Response) =>{
    let list = Pet.getFromType('cat')
    res.render('pages/home', {
        menu: createMenuObject('cat'), 
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
};
export const fishes = (req: Request, res: Response) =>{
    let list = Pet.getFromType('fish')
    res.render('pages/home', {
        menu: createMenuObject('fish'), 
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
};