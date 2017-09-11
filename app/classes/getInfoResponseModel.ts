import { Owner } from './owner';
import { Visibility } from './visibility';
import { Dates } from './dates';
import { Usage } from './usage';

export class GetInfoResponseModel {
    id: number;
    title: { _content: string };
    secret: string;
    server: string;
    farm: string;
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