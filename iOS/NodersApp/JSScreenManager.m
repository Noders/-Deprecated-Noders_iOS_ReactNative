//
//  JSScreenManager.m
//  NodersApp
//
//  Created by Jose Vildosola on 29-10-15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "JSScreenManager.h"

@implementation JSScreenManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getScreenWidth:(RCTResponseSenderBlock)callback){
  CGFloat width = [[UIScreen mainScreen] bounds].size.width;
  callback(@[[NSNumber numberWithDouble:width]]);
}

@end
