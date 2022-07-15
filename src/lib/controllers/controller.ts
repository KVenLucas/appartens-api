import { ServerBootstrapSingleton } from '../classes/server.bootstrap';
import { Controller } from '../resource/controller.decorator';
import { Get } from '../resource/get.decorator';

@Controller('healthcheck')
class HealthcheckController {
  @Get('/ping-pong')
  pingPong() {
    console.log(this);
  }
}

new ServerBootstrapSingleton();
new HealthcheckController().pingPong();
