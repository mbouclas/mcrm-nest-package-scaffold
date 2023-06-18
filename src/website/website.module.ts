import {Module, OnModuleInit} from '@nestjs/common';
import {ModuleRef} from "@nestjs/core";
import {EventEmitter2} from "@nestjs/event-emitter";
import {WebsiteService} from "./services/website.service";


@Module({
    providers: [
        WebsiteService
    ],
    exports: [
        WebsiteService
    ],

})
export class WebsiteModule implements OnModuleInit {
    static moduleRef: ModuleRef;
    static eventEmitter: EventEmitter2;

    constructor(
        private m: ModuleRef,
        private eventEmitter: EventEmitter2,
    ) {
        WebsiteModule.eventEmitter = eventEmitter;
    }

    onModuleInit(): any {
        console.log('WebsiteModule onModuleInit fired v2');
        WebsiteModule.moduleRef = this.m;
    }

    static getService(service: any) {
        return WebsiteModule.moduleRef.get(service);
    }
}
