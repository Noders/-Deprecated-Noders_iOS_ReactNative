//
//  JSAudioPlayer.h
//  NodersApp
//
//  Created by Jose Vildosola on 30-10-15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import <RCTBridgeModule.h>
#import <AVFoundation/AVFoundation.h>

@interface JSAudioPlayer : NSObject <RCTBridgeModule>

@property (nonatomic, strong) AVPlayer *audioPlayer;

@end
