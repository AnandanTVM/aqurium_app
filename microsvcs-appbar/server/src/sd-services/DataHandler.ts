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
//append_imports_end
export class DataHandler {
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
    this.serviceName = 'DataHandler';
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
      instance = new DataHandler(
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
      //appendnew_flow_DataHandler_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: DataHandler');

    //appendnew_flow_DataHandler_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: DataHandler');

    this.app['get'](
      `${this.serviceBasePath}/test`,
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
          bh = await this.sd_OLr8mgXWxcBbuwfg(bh, parentSpanInst);
          //appendnew_next_sd_J4V4kXTld30H8KHa
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_J4V4kXTld30H8KHa');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_DataHandler_HttpIn
  }
  //   service flows_DataHandler

  async postCall(parentSpanInst, result: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan('postCall', parentSpanInst);
    try {
      var bh: any = {
        input: {
          result: result,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_umjNYkdD8JQftg2w(bh, parentSpanInst);
      //appendnew_next_postCall
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jL6u1iKj9MNbcgY9',
        spanInst,
        'postCall'
      );
    }
  }

  //appendnew_flow_DataHandler_start

  async sd_OLr8mgXWxcBbuwfg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OLr8mgXWxcBbuwfg',
      parentSpanInst
    );
    try {
      bh.input.body = {
        filter: {},
        orderBy: { seqid: 'ASC' },
        pageSize: 0,
        offSet: 0,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TIBDTpVyMktL3uo4(bh, parentSpanInst);
      //appendnew_next_sd_OLr8mgXWxcBbuwfg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OLr8mgXWxcBbuwfg',
        spanInst,
        'sd_OLr8mgXWxcBbuwfg'
      );
    }
  }

  async sd_TIBDTpVyMktL3uo4(bh, parentSpanInst) {
    try {
      let requestOptions = {
        url: 'http://localhost:8091/api/dm/appbardata/appbar/find-all',
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.input.body,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        rejectUnauthorized: undefined,
        useQuerystring: false,
      };
      if (!false) {
        requestOptions.rejectUnauthorized = false;
      }
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.result = responseMsg;

      bh = await this.sd_Hppn7RC8GPpaUU3h(bh, parentSpanInst);
      //appendnew_next_sd_TIBDTpVyMktL3uo4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TIBDTpVyMktL3uo4');
    }
  }

  async sd_Hppn7RC8GPpaUU3h(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Hppn7RC8GPpaUU3h',
      parentSpanInst
    );
    try {
      let outputVariables = await this.postCall(spanInst, bh.local.result);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_0h2pmmPv9vVMesjF(bh, parentSpanInst);
      //appendnew_next_sd_Hppn7RC8GPpaUU3h
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Hppn7RC8GPpaUU3h',
        spanInst,
        'sd_Hppn7RC8GPpaUU3h'
      );
    }
  }

  async sd_0h2pmmPv9vVMesjF(bh, parentSpanInst) {
    try {
      bh.web.res.status(202).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0h2pmmPv9vVMesjF');
    }
  }

  async sd_umjNYkdD8JQftg2w(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_umjNYkdD8JQftg2w',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_umjNYkdD8JQftg2w
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_umjNYkdD8JQftg2w',
        spanInst,
        'sd_umjNYkdD8JQftg2w'
      );
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
  //appendnew_flow_DataHandler_Catch
}
