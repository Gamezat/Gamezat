<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use App\Models\Product;
use App\Models\Report;
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
}
