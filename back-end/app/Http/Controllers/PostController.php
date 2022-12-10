<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;

class PostController extends Controller
{

    public function index()
    {

        $posts = Post::with(['like', 'comments.user', 'user'])->get();

        return response()->json([
            'status' => 200,
            'data' => $posts,
        ]);
    }

    public function store(Request $request)
    {
        $file = $request->file('image');
        $filename = uniqid() . "_" . $file->getClientOriginalName();
        $file->move(public_path('public/images'), $filename);
        $url = URL::to('/') . '/public/images/' . $filename;
        $addPost = Post::create([
            'user_id' => Auth::user()->id,
            'content' => $request->content,
            'image' => $url,

        ]);

        $posts = Post::with(['like', 'comments.user', 'user'])->get();

        return response()->json([
            'status' => 200,
            'data' => $posts,
        ]);
    }

    public function delete(Request $request, $id)
    {
        // Check if the authenticated user's ID matches the ID of the user who posted the post
        $post = Post::findOrFail($id);
        if ($request->user()->id === $post->user_id) {
            $post->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Post deleted successfully.',
            ]);
        } else {
            // Handle unauthorized delete attempt
            return response()->json([
                'status' => 403,
                'message' => 'You are not authorized to delete this post.',
            ]);
        }
    }

    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
    }
}
