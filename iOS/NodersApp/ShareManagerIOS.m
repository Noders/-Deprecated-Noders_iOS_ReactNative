//
//  ShareManagerIOS.m
//  NodersApp
//
//  Created by Jose Vildosola on 25-10-15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "ShareManagerIOS.h"


@implementation ShareManagerIOS

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(shareWithWhatsapp:(NSString *)url withResponse:(RCTResponseSenderBlock)response){
  NSString * urlString = [[NSString stringWithFormat:@"whatsapp://send?text=Mira el siguiente video %@ - Noders",url] stringByAddingPercentEscapesUsingEncoding:NSUTF8StringEncoding];
  
  if ([[UIApplication sharedApplication] canOpenURL:[NSURL URLWithString:urlString]]) {
    [[UIApplication sharedApplication] openURL:[NSURL URLWithString:urlString]];
    response(@[[NSNull null]]);
  } else {
    response(@[@"Por favor instala whatsapp para compartir nuestros videos"]);
  }
}

@end
