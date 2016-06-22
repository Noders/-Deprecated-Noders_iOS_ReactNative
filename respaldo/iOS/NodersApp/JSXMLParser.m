//
//  JSXMLParser.m
//  NodersApp
//
//  Created by Jose Vildosola on 29-10-15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "JSXMLParser.h"

@implementation JSXMLParser
@synthesize parser, item, items, itemFound, elementValue;

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(parseXMLString:(NSString *)xml callback:(RCTResponseSenderBlock)callback){
  parser = [[NSXMLParser alloc] initWithData:[xml dataUsingEncoding:NSUTF8StringEncoding]];
  parser.delegate = self;
  itemFound = false;
  [parser parse];
  callback(items);
}

-(void)parser:(NSXMLParser *)parser didStartElement:(NSString *)elementName namespaceURI:(NSString *)namespaceURI qualifiedName:(NSString *)qName attributes:(NSDictionary<NSString *,NSString *> *)attributeDict{
  if ([elementName isEqualToString:@"channel"]) {
    items = [[NSMutableArray alloc] init];
  }
  if ([elementName isEqualToString:@"item"]) {
    item = [[NSMutableDictionary alloc] init];
  }
  elementValue = [@"" mutableCopy];
}

-(void)parser:(NSXMLParser *)parser didEndElement:(NSString *)elementName namespaceURI:(NSString *)namespaceURI qualifiedName:(NSString *)qName{
  if ([elementName isEqualToString:@"item"]) {
    [items addObject:item];
    item = nil;
  }
  if (item != nil) {
    [item setObject:elementValue forKey:elementName];
  }
}

-(void)parser:(NSXMLParser *)parser foundCharacters:(NSString *)string{
  elementValue = [string mutableCopy];
}

@end
