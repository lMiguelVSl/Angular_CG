import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: 'server.component.html'
})
export class ServerComponent {
    serverId: string = '10DSTV';
    serverStatus: string = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus == 'online' ? 'green' : 'red';
    }
}