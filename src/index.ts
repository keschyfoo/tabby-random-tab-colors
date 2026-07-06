import { APP_INITIALIZER, NgModule } from '@angular/core'
import { ConfigProvider } from 'tabby-core'

import { RandomTabColorService } from './randomTabColor.service'
import { RandomTabColorConfigProvider } from './config'

@NgModule({
    providers: [
        RandomTabColorService,
        {
            provide: APP_INITIALIZER,
            useFactory: (svc: RandomTabColorService) => () => Promise.resolve(),
            multi: true,
            deps: [RandomTabColorService],
        },
        { provide: ConfigProvider, useClass: RandomTabColorConfigProvider, multi: true },
    ],
})
export default class RandomTabColorsModule {}
