export class CreateClientDto {
    readonly name: string;
    readonly phone: string;
    readonly consultation: boolean;
    readonly order: boolean;
    readonly isView: boolean;
}