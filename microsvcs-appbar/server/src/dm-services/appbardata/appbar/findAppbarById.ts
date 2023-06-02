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
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../../middleware/Middleware'; //_splitter_
import * as settings from '../../../config/config'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import { dmUtils } from '../../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class findAppbarById {
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
    this.serviceName = 'findAppbarById';
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
      instance = new findAppbarById(
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
      //appendnew_flow_findAppbarById_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: findAppbarById');

    //appendnew_flow_findAppbarById_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: findAppbarById');

    this.app['post'](
      `${this.serviceBasePath}/dm/appbardata/appbar/find-by-id`,
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
          bh = await this.sd_0grguYfj00JSLkeH(bh, parentSpanInst);
          //appendnew_next_sd_CLjGWpszAjfb1nXp
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CLjGWpszAjfb1nXp');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_findAppbarById_HttpIn
  }
  //   service flows_findAppbarById

  //appendnew_flow_findAppbarById_start

  async sd_0grguYfj00JSLkeH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0grguYfj00JSLkeH',
      parentSpanInst
    );
    try {
      this.sdService.addDMPropertiesToBh(bh, bh.web.req, 'appbar');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VDRQqGprTfZty0xo(bh, parentSpanInst);
      //appendnew_next_sd_0grguYfj00JSLkeH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uAtlGHKDPXYHRNur',
        spanInst,
        'sd_0grguYfj00JSLkeH'
      );
    }
  }

  async sd_VDRQqGprTfZty0xo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VDRQqGprTfZty0xo',
      parentSpanInst
    );
    try {
      let dmUtilsInst = new dmUtils('sd_EHdYnCQ1tpcQuzjY');
      bh.result = await dmUtilsInst.find(
        '_EN_i6z93bk131',
        bh.filter,
        bh.offSet,
        bh.orderBy,
        bh.pageSize
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8CoKwRRqFazkdHUc(bh, parentSpanInst);
      //appendnew_next_sd_VDRQqGprTfZty0xo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VDRQqGprTfZty0xo',
        spanInst,
        'sd_VDRQqGprTfZty0xo'
      );
    }
  }

  async sd_8CoKwRRqFazkdHUc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8CoKwRRqFazkdHUc',
      parentSpanInst
    );
    try {
      if (bh.result) {
        if (Array.isArray(bh.result) && bh.result.length) {
          bh.result = bh.result[0];
        }
      } else {
        throw new Error('Not found.');
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_IpUaU51q741upXgr(bh, parentSpanInst);
      //appendnew_next_sd_8CoKwRRqFazkdHUc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8CoKwRRqFazkdHUc',
        spanInst,
        'sd_8CoKwRRqFazkdHUc'
      );
    }
  }

  async sd_IpUaU51q741upXgr(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_es69qWOD7rWlzj4e');
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
  //appendnew_flow_findAppbarById_Catch
}
