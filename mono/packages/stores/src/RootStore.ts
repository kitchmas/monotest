import {getTom, getIlya} from "@mono/libs/src/utils/nameReader.utils.ts";

export class RootStore{
    public get Tom(){
        return getTom()
    }
    public get Ilya(){
        return getIlya()
    }
}