import { Owner } from './owner';
import { Visibility } from './visibility';
import { Dates } from './dates';
import { Usage } from './usage';

export class getInfoResponseModel {
    id: string;
    secret: string;
    server: string;
    farm: number;
    dateuploaded: string;
    isfavorite: number;
    license: string;
    safety_level: string;
    rotation: number;
    originalsecret: string;
    originalformat: string;

    owner: Owner;
    visibility: Visibility;
    dates: Dates;
    usage: Usage;
}