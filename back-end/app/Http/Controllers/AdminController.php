<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use App\Models\Product;
use App\Models\Report;
use App\Models\Review;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function mainData()
    {
        $users = User::select('name', 'email', 'image')->take(5)->get();
        $allComments = Comment::with(['user', 'post'])->take(20)->get();
        // $allComments = Comment::select('comment')->take(20)->get();
        // foreach ($allComments as $comment) {
        //     $comment->user;
        // }
        $count = User::count();
        $products = Product::count();
        $posts = Post::count();
        $comments = Comment::count();
        $reports = Report::count();

        return response()->json([
            'status' => 200,
            'usersPrev' => $users,
            'usersCount' => $count,
            'productCount' => $products,
            'postsCount' => $posts,
            'commentsCount' => $comments,
            'reportsCount' => $reports,
            'allComments' => $allComments,
        ]);
    }
    public function delPost(Request $request)
    {
        $post = Post::find($request->id);
        $post->delete();
        $allPosts = Post::with(['comments.user', 'user'])->get();
        return response()->json([
            'status' => 200,
            'posts' => $allPosts,
        ]);
    }
    public function allReports()
    {
        // $commentsReports = Report::withWhereHas('comment')->get();
        $commentsReports = Report::withWhereHas('comment')->get()->map(function ($report) {
            return [
                'id' => $report->id,
                'comment_id' => $report->comment_id,
                'user_id' => $report->user_id,
                'feedback' => $report->feedback,
                'comment' => $report->comment->comment,
            ];
        });
        $postsReports = Report::withWhereHas('post')->get()->map(function ($report) {
            return [
                'id' => $report->id,
                'post_id' => $report->post_id,
                'user_id' => $report->user_id,
                'feedback' => $report->feedback,
                'content' => $report->post->content,
                'post_image' => $report->post->image,
            ];
        });
        $reviewsReports = Report::withWhereHas('review')->get()->map(function ($report) {
            return [
                'id' => $report->id,
                'review_id' => $report->review_id,
                'user_id' => $report->user_id,
                'feedback' => $report->feedback,
                'review' => $report->review->review,
                'stars' => $report->review->stars,
            ];
        });
        return response()->json([
            'status' => 200,
            'comments' => $commentsReports,
            'posts' => $postsReports,
            'reviews' => $reviewsReports,
        ]);
    }

    public function delReport(Request $request)
    {
        Report::find($request->id)->delete();
        return  $this->allReports();
    }
    public function delComment(Request $request)
    {
        Report::find($request->report_id)->delete();
        Comment::find($request->comment_id)->delete();
        return  $this->allReports();
    }
    public function delReview(Request $request)
    {
        Report::find($request->report_id)->delete();
        Review::find($request->review_id)->delete();
        return  $this->allReports();
    }
    public function delrPost(Request $request)
    {
        Report::find($request->report_id)->delete();
        Review::find($request->post_id)->delete();
        return $this->allReports();
    }


    public function unApprovedPosts()
    {
        // get all posts where is_approved = 0
        $posts = Post::where('is_approved', 0)->get();

        return response()->json([
            'status' => 200,
            'posts' => $posts,
        ]);
    }
    public function approvePosts(Request $request)
    {
        // is_approved => 1
        $post = Post::find($request->post_id);

        $post->is_approved = 1;
        $post->save();

        $posts = Post::where('is_approved', 1)->get();
        $unApprovedPosts = Post::where('is_approved', 0)->get();

        return response()->json([
            'status' => 200,
            'posts' => $posts,
            'unApprovedPosts' => $unApprovedPosts
        ]);

        
    }

    public function rejectPosts(Request $request)
    {
        // delete
        $post = Post::find($request->post_id);

        $post->delete();

        $posts = Post::where('is_approved', 1)->get();
        $unApprovedPosts = Post::where('is_approved', 0)->get();

        return response()->json([
            'status' => 200,
            'posts' => $posts,
            'unApprovedPosts' => $unApprovedPosts
        ]);


    }
}
