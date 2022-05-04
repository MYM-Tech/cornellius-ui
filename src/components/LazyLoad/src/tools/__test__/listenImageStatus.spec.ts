import { expect, it, vi } from "vitest";
import { listenImageStatus } from "../listenImageStatus";

it('should return the good function of image tag', ()=> {
    const imageTag = document.createElement('img')
    const consoleLogSpyOn = vi.spyOn(console, 'log');
    
    const onSuccess =  vi.fn((status)=> {
        expect(status).toBe(true)
    })
    const onError = () => { return 'error'}
    listenImageStatus(imageTag, onSuccess, onError)
    imageTag.src = 'https://mym.fans/build/images/mym.e5c01898.svg'
    
    if (imageTag.onload) {
        const event: any = { status: "success"};
        imageTag.onload(event);
        expect(consoleLogSpyOn).toBeCalledWith(event)
    }
})