//
//  JSXMLParser.h
//  NodersApp
//
//  Created by Jose Vildosola on 29-10-15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <RCTBridgeModule.h>

@interface JSXMLParser : NSObject <RCTBridgeModule, NSXMLParserDelegate>

@property (nonatomic, strong) NSXMLParser *parser;
@property (nonatomic, strong) NSMutableArray *items;
@property (nonatomic, strong) NSMutableDictionary *item;
@property (nonatomic, strong) NSMutableString *elementValue;
@property (nonatomic, assign) BOOL itemFound;

@end
