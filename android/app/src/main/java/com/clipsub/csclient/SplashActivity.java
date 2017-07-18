package com.clipsub.csclient;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.Window;
import android.view.WindowManager;

import java.util.Timer;
import java.util.TimerTask;

public class SplashActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    // Hide action bar.
    super.onCreate(savedInstanceState);
    getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
            WindowManager.LayoutParams.FLAG_FULLSCREEN);
    requestWindowFeature(Window.FEATURE_NO_TITLE);

    // Set the content view.
    setContentView(R.layout.activity_splash);

    // Start Timer Task.
    TimerTask task = new TimerTask() {
      @Override
      public void run() {
        Intent nextActivity = new Intent(SplashActivity.this, MainActivity.class);
        startActivity(nextActivity);
        SplashActivity.this.finish();
      }
    };

    new Timer().schedule(task, 3000);
  }
}
