import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: 'server.component.html'
})
export class ServerComponent implements OnInit {
    @Input() serverName: string = '';
    serverId: string = '10DSTV';
    serverStatus: string = 'online';
    color: string = '';

    ngOnInit(): void {
        this.color = this.serverStatus == 'online' ? 'black' : 'white';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus == 'online' ? 'green' : 'red';
    }
}