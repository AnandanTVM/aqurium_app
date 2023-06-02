let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class Category {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'Category';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new Category(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_Category_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Category');

    //appendnew_flow_Category_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Category');

    this.app['get'](
      `${this.serviceBasePath}/getrecipetypes`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.queryandOptionsSetter(bh, parentSpanInst);
          //appendnew_next_sd_I5bVszsqa75Skyi1
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_I5bVszsqa75Skyi1');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/counttypes/:name`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.querySetter(bh, parentSpanInst);
          //appendnew_next_sd_MiiMeHbNylTvqrDl
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_MiiMeHbNylTvqrDl');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Category_HttpIn
  }
  //   service flows_Category

  //appendnew_flow_Category_start

  async queryandOptionsSetter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'queryandOptionsSetter',
      parentSpanInst
    );
    try {
      bh.input.mongoQuery = {};
      bh.input.options = {};

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCategories(bh, parentSpanInst);
      //appendnew_next_queryandOptionsSetter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Po1FFGMvH7CB8MF9',
        spanInst,
        'queryandOptionsSetter'
      );
    }
  }

  async getCategories(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getCategories',
      parentSpanInst
    );
    try {
      bh.input.result = await MongoPersistance.getInstance().find(
        'sd_4YvRRtlD4kQUpHLC',
        'categories',
        bh.input.mongoQuery,
        bh.input.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.resp(bh, parentSpanInst);
      //appendnew_next_getCategories
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RcLMXuGKzhEg8oSk',
        spanInst,
        'getCategories'
      );
    }
  }

  async resp(bh, parentSpanInst) {
    try {
      bh.web.res.status(202).send(bh.input.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UeGxy207F2jnkm4y');
    }
  }

  async querySetter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'querySetter',
      parentSpanInst
    );
    try {
      bh.input.mongoQuery = {
        type: { $regex: `${bh.input.params.name}`, $options: 'i' },
      };
      console.log('hererer');

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getRecipeCount(bh, parentSpanInst);
      //appendnew_next_querySetter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oFXXzqboEoVhpZmf',
        spanInst,
        'querySetter'
      );
    }
  }

  async getRecipeCount(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getRecipeCount',
      parentSpanInst
    );
    try {
      bh.input.result = await MongoPersistance.getInstance().countDocuments(
        'sd_4YvRRtlD4kQUpHLC',
        'alltypes',
        bh.input.mongoQuery,
        bh.input.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_81GGJp0wLCNyVc8J(bh, parentSpanInst);
      //appendnew_next_getRecipeCount
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sYsISDiUqLNPk36Y',
        spanInst,
        'getRecipeCount'
      );
    }
  }

  async sd_81GGJp0wLCNyVc8J(bh, parentSpanInst) {
    try {
      bh.web.res.status(202).send(bh.input.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_81GGJp0wLCNyVc8J');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_Category_Catch
}
