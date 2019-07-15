import { UserInterface } from 'src/app/models/user-interface';
import { TypeDocumentInterface } from 'src/app/models/type-interface';
import { ContacInfoInterface } from 'src/app/models/contactinfo-interface';

export interface UserRegister {
    User?: UserInterface,
    Document?: TypeDocumentInterface,
    Contact?: ContacInfoInterface
}
