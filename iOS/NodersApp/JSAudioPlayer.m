//
//  JSAudioPlayer.m
//  NodersApp
//
//  Created by Jose Vildosola on 30-10-15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "JSAudioPlayer.h"

@implementation JSAudioPlayer

@synthesize audioPlayer;

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(play:(NSString*)url isNetwork:(BOOL)network callback:(RCTResponseSenderBlock)callback){
  AVAudioSession *currentSession = [AVAudioSession sharedInstance];
  NSError *categoryError;
  [currentSession setCategory:AVAudioSessionCategoryPlayback error:&categoryError];
  if (categoryError) {
    callback(@[categoryError.localizedDescription]);
  } else {
    NSError *activeError;
    [currentSession setActive:YES error:&activeError];
    if (activeError) {
      callback(@[activeError.localizedDescription]);
    } else {
      NSError *playerError;
      if (network) {
        NSURL *networkURL = [NSURL URLWithString:url];
        AVURLAsset *avAsset = [AVURLAsset URLAssetWithURL:networkURL options:nil];
        audioPlayer = [AVPlayer playerWithPlayerItem:[AVPlayerItem playerItemWithAsset:avAsset]];
      } else {
        NSURL *localURL = [[NSBundle mainBundle] URLForResource:url withExtension:@"mp3"];
        AVURLAsset *avAsset = [AVURLAsset URLAssetWithURL:localURL options:nil];
        audioPlayer = [AVPlayer playerWithPlayerItem:[AVPlayerItem playerItemWithAsset:avAsset]];
      }
      if (playerError) {
        callback(@[playerError.localizedDescription]);
      } else {
        [audioPlayer play];
      }
    }
  }
}

RCT_EXPORT_METHOD(pauseCurrent){
  [audioPlayer pause];
}

@end
